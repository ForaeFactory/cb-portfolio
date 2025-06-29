import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};


/**
 * Media query breakpoints
 */
export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

/**
 * Convert a px string to a number
 */
export const pxToNum = px => Number(px.replace('px', ''));

/**
 * Convert a number to a px string
 */
export const numToPx = num => `${num}px`;

/**
 * Convert pixel values to rem for a11y
 */
export const pxToRem = px => `${px / 16}rem`;

/**
 * Convert ms token values to a raw numbers for ReactTransitionGroup
 * Transition delay props
 */
export const msToNum = msString => Number(msString.replace('ms', ''));

/**
 * Convert a number to an ms string
 */
export const numToMs = num => `${num}ms`;

/**
 * Convert an rgb theme property (e.g. rgbBlack: '0 0 0')
 * to values that can be spread into a ThreeJS Color class
 */
export const rgbToThreeColor = rgb =>
  rgb?.split(' ').map(value => Number(value) / 255) || [];

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
export function cssProps(props, style = {}) {
  let result = {};

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key];

    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value);
    }

    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value);
    }

    if (typeof value === 'number' && key === 'opacity') {
      value = `${value * 100}%`;
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}

/**
 * Concatenate classNames together
 */
export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Use the browser's image loading to load an image and
 * grab the `src` it chooses from a `srcSet`
 */
export async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error('No image src or srcSet provided');
      }

      let tempImage = new Image();

      if (src) {
        tempImage.src = src;
      }

      if (srcSet) {
        tempImage.srcset = srcSet;
      }

      if (sizes) {
        tempImage.sizes = sizes;
      }

      const onLoad = () => {
        tempImage.removeEventListener('load', onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };

      tempImage.addEventListener('load', onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}

/**
 * Generates a transparent png of a given width and height
 */
export async function generateImage(width = 1, height = 1) {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    canvas.toBlob(async blob => {
      if (!blob) throw new Error('Video thumbnail failed to load');
      const image = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image);
    });
  });
}

/**
 * Use native html image `srcSet` resolution for non-html images
 */
export async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(', ').map(async srcString => {
      const [src, width] = srcString.split(' ');
      const size = Number(width.replace('w', ''));
      const image = await generateImage(size);
      return { src, image, width };
    })
  );

  const fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(', ');
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });

  const output = sources.find(src => src.image === fakeSrc);
  return output.src;
}

const config = {
  "name": "Craig Brooks",
  "role": "Designer",
  "disciplines": ["Creator", "Innovator", "Director", "Motivator", "Developer"],
  "url": "https://foraefactory.com",
  "linkedin": "craigbrooks",
  "repo": "https://github.com/ForaeFactory/cb-design",
  "ascii": "__  __  __\n\u005C \u005C \u005C \u005C \u005C\u2215\n \u005C \u005C\u2215\u005C \u005C\n  \u005C\u2215  \u005C\u2215\n"
}

const { name, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: 'Banner for the site' },
    { property: 'og:image:width', content: '1280' },
    { property: 'og:image:height', content: '800' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: url },
    { property: 'twitter:creator', content: twitter },
    { property: 'twitter:image', content: ogImage },
  ];
}
