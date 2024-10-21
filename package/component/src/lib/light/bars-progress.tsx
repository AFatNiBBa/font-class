
import { Icon } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=light bars-progress}
 * @preview ![bars-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bars-progress.svg)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 96c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-144 0 0-96 144 0zM48 96l240 0 0 96L48 192c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm0-32C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM464 320c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-272 0 0-96 272 0zM48 320l112 0 0 96L48 416c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm0-32c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z" />
    </Icon>
);

export default BarsProgress;