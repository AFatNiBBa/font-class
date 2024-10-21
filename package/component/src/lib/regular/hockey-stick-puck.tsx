
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=regular hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M499 2.7c11.8 6.1 16.4 20.6 10.3 32.3L282.7 473.1c-12.4 23.9-37 38.9-64 38.9L64 512c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l240 0c1.3 0 2.5 .1 3.7 .3L466.7 13C472.8 1.2 487.3-3.4 499 2.7zM283 368l-139 0 0 96 74.8 0c9 0 17.2-5 21.3-13L283 368zM64 368c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l32 0 0-96-32 0zm368 64l0 32 160 0 0-32-160 0zm-48 0c0-26.5 21.5-48 48-48l160 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-32z" />
    </Icon>
);

export default HockeyStickPuck;