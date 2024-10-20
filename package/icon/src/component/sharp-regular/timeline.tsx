
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=sharp-regular timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 64l0 64-8 0-48 0-8 0 0-64 64 0zm-8 112l8 0 48 0 0-48 0-64 0-48-48 0L96 16 48 16l0 48 0 64 0 48 48 0 8 0 0 56-80 0L0 232l0 48 24 0 272 0 0 56-8 0-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-8 0 0-56 272 0 24 0 0-48-24 0-80 0 0-56 8 0 48 0 0-48 0-64 0-48-48 0-64 0-48 0 0 48 0 64 0 48 48 0 8 0 0 56-336 0 0-56zM344 384l8 0 0 64-64 0 0-64 8 0 48 0zM480 64l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Timeline;