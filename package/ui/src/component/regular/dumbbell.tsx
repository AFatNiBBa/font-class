
import { Icon } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=regular dumbbell}
 * @preview ![dumbbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dumbbell.svg)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 88c0-30.9 25.1-56 56-56l16 0c30.9 0 56 25.1 56 56l0 144 128 0 0-144c0-30.9 25.1-56 56-56l16 0c30.9 0 56 25.1 56 56l0 16 24 0c30.9 0 56 25.1 56 56l0 72 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 72c0 30.9-25.1 56-56 56l-24 0 0 16c0 30.9-25.1 56-56 56l-16 0c-30.9 0-56-25.1-56-56l0-144-128 0 0 144c0 30.9-25.1 56-56 56l-16 0c-30.9 0-56-25.1-56-56l0-16-24 0c-30.9 0-56-25.1-56-56l0-72-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-72c0-30.9 25.1-56 56-56l24 0 0-16zm48 16l0 24 0 256 0 24 0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-336c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 16zm-48 48l-24 0c-4.4 0-8 3.6-8 8l0 192c0 4.4 3.6 8 8 8l24 0 0-208zM464 384l0-256 0-24 0-16c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 336c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16 0-24zm72-24c4.4 0 8-3.6 8-8l0-192c0-4.4-3.6-8-8-8l-24 0 0 208 24 0z" />
    </Icon>
);

export default Dumbbell;