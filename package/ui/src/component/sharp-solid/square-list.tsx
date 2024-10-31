
import { Icon } from "../../index";

/**
 * A component that renders the `square-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=sharp-solid square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248l-24 0 0 48 24 0 160 0 24 0 0-48-24 0-160 0zm0 96l-24 0 0 48 24 0 160 0 24 0 0-48-24 0-160 0zm0 96l-24 0 0 48 24 0 160 0 24 0 0-48-24 0-160 0z" />
    </Icon>
);

export default SquareList;