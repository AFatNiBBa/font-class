
import { Icon } from "../../index";

/**
 * A component that renders the `circle-b` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-b?s=regular circle-b}
 * @preview ![circle-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-b.svg)
 */
const CircleB: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152l0 104 0 104c0 13.3 10.7 24 24 24l108 0c42 0 76-34 76-76c0-24.6-11.7-46.4-29.8-60.3c8.7-12.4 13.8-27.4 13.8-43.7c0-42-34-76-76-76l-92 0c-13.3 0-24 10.7-24 24zm144 52c0 15.5-12.5 28-28 28l-68 0 0-56 68 0c15.5 0 28 12.5 28 28zM208 336l0-56 68 0 16 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-84 0z" />
    </Icon>
);

export default CircleB;