
import { Icon } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=sharp-thin dumbbell}
 * @preview ![dumbbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dumbbell.svg)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48l0 200 0 16 0 200-80 0 0-48 0-16 0-288 0-16 0-48 80 0zM112 416l0 48 0 16 16 0 80 0 16 0 0-16 0-200 192 0 0 200 0 16 16 0 80 0 16 0 0-16 0-48 64 0 16 0 0-16 0-136 24 0 8 0 0-16-8 0-24 0 0-136 0-16-16 0-64 0 0-48 0-16-16 0-80 0-16 0 0 16 0 200-192 0 0-200 0-16-16 0-80 0-16 0 0 16 0 48L48 96 32 96l0 16 0 136L8 248l-8 0 0 16 8 0 24 0 0 136 0 16 16 0 64 0zM528 112l64 0 0 136 0 16 0 136-64 0 0-288zM512 416l0 48-80 0 0-200 0-16 0-200 80 0 0 48 0 16 0 288 0 16zM112 400l-64 0 0-136 0-16 0-136 64 0 0 288z" />
    </Icon>
);

export default Dumbbell;