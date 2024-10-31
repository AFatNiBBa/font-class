
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=regular arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48c13.3 0 24-10.7 24-24s-10.7-24-24-24C114.6 0 0 114.6 0 256S114.6 512 256 512c13.3 0 24-10.7 24-24s-10.7-24-24-24C141.1 464 48 370.9 48 256zM392.3 134.4c-9.7-9-24.9-8.5-33.9 1.3s-8.5 24.9 1.3 33.9L426.9 232 184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l242.9 0-67.2 62.4c-9.7 9-10.3 24.2-1.3 33.9s24.2 10.3 33.9 1.3l112-104c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104z" />
    </Icon>
);

export default ArrowRightFromArc;