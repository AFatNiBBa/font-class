
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-solid acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M259.7 48.4c-3.3 4.8-6 10.1-8 15.6L352 64c53 0 96 43 96 96l0 32L0 192l0-32c0-53 43-96 96-96l106.1 0c3-15.3 9.2-29.9 18.1-42.9L233.9 1.4l39.5 27.3L259.7 48.4zM224 480C80 432 48 304 48 224l176 0 176 0c0 80-32 208-176 256z" />
    </Icon>
);

export default Acorn;