
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=sharp-thin spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M106.7 0l10.7 0 2 4.9L223.8 256l-17.3 0-33.3-80L50.8 176 17.5 256 .2 256 104.6 4.9l2-4.9zm59.9 160L112 28.8 57.4 160l109.1 0zM264 0l88 0c35.3 0 64 28.7 64 64c0 20.1-9.3 38.1-23.8 49.8c32 7.3 55.8 36 55.8 70.2c0 39.8-32.2 72-72 72l-112 0-8 0 0-8 0-128L256 8l0-8 8 0zM400 64c0-26.5-21.5-48-48-48l-80 0 0 96 80 0c26.5 0 48-21.5 48-48zM272 240l104 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-24 0-80 0 0 112zm299.3 52.8l-5.7 5.7-208 208-5.5 5.5-5.7-5.3-120-112-5.8-5.5 10.9-11.7 5.8 5.5L351.8 489.7 554.3 287.1l5.7-5.7 11.3 11.3z" />
    </Icon>
);

export default SpellCheck;