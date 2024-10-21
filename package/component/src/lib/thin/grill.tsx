
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=thin grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M408 48c13.3 0 24 10.7 24 24l0 24c0 114.9-93.1 208-208 208S16 210.9 16 96l0-24c0-13.3 10.7-24 24-24l368 0zM40 32C17.9 32 0 49.9 0 72L0 96c0 93.9 57.8 174.3 139.8 207.6l-23.5 51.7c-6.4-2.1-13.2-3.3-20.3-3.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-5.5-.7-10.9-2-16l176.5 0 34.2 75.3c1.8 4 6.6 5.8 10.6 4s5.8-6.6 4-10.6l-75-165.1C390.2 270.3 448 189.9 448 96l0-24c0-22.1-17.9-40-40-40L40 32zM327.2 384l-175.8 0c-5.1-8.8-12.2-16.3-20.7-21.8l24.1-53.1c21.8 7.1 45 10.9 69.2 10.9s47.4-3.8 69.2-10.9l34 74.9zM96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Grill;