
import { Icon } from "../../index";

/**
 * A component that renders the `8` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/8?s=regular 8}
 * @preview ![8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/8.svg)
 */
const $8: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 156c0-68.5-55.5-124-124-124l-40 0C71.5 32 16 87.5 16 156c0 37.7 16.8 71.4 43.3 94.2C23.7 272 0 311.2 0 356c0 68.5 55.5 124 124 124l72 0c68.5 0 124-55.5 124-124c0-44.8-23.7-84-59.3-105.8C287.2 227.4 304 193.7 304 156zM180.1 280l15.9 0c42 0 76 34 76 76s-34 76-76 76l-72 0c-42 0-76-34-76-76s34-76 76-76l15.9 0c0 0 0 0 .1 0l40 0c0 0 0 0 .1 0zm0-48c0 0 0 0 0 0l-40 0c0 0 0 0 0 0c-42 0-76-34-76-76c0-42 34-76 76-76l40 0c42 0 76 34 76 76c0 42-34 76-76 76z" />
    </Icon>
);

export default $8;