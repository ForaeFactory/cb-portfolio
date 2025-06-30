import { Button } from '../../components/button';
import { Icon } from '../../components/icon';

// eslint-disable-next-line react/prop-types
export const NavToggle = ({ menuOpen, ...rest }) => {
  return (
    <Button
      iconOnly
      className="navToggle"
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className="navToggleInner">
        <Icon className="navToggleIcon" data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className="navToggleIcon"
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
