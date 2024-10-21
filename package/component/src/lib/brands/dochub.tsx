
import { Icon } from "../../index";

/**
 * A component that renders the `dochub` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dochub?s=brands dochub}
 * @preview ![dochub](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/dochub.svg)
 */
const Dochub: typeof Icon = x => (
    <Icon viewBox="0 0 416 512" {...x}>
        <path d="M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1.8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z" />
    </Icon>
);

export default Dochub;