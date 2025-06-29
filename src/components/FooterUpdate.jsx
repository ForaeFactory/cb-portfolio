
import { Text } from '../components/text';
import { classes } from '../lib/utils';
import config from '../config.json';

// eslint-disable-next-line react/prop-types
export const FooterUpdate = ({ className }) => (
    <footer className={classes('footer', className)}>
        <Text size="s" align="center">
            <span className="date">
                {`© ${new Date().getFullYear()} ${config.name}.`}
            </span>
            | Crafted by yours truly
        </Text>
    </footer>
);
