import { Button } from '../../components/button';
import { Icon } from '../../components/icon';

export const NavToggle = ({ menuOpen, ...rest }) => {
  return (
    <Button
      iconOnly
      className="navToggle"
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className="navInner">
        <Icon className="navIcon2" data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className="navIcon2"
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
