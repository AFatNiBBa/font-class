
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-xmark?s=sharp-light anchor-circle-xmark}
 * @preview ![anchor-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/anchor-circle-xmark.svg)
 */
const AnchorCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 80a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM288 0c-44.2 0-80 35.8-80 80c0 38.7 27.5 71 64 78.4l0 1.6 0 32-64 0-16 0 0 32 16 0 64 0 0 256L96 480l0-169.4 28.7 28.7L136 350.6 158.6 328l-11.3-11.3-56-56L80 249.4 68.7 260.7l-56 56L1.4 328 24 350.6l11.3-11.3L64 310.6 64 496l0 16 16 0 208 0 106.8 0c-12.9-9.1-24.5-19.9-34.6-32L304 480l0-256 64 0 16 0 0-32-16 0-64 0 0-32 0-1.6c36.5-7.4 64-39.7 64-78.4c0-44.2-35.8-80-80-80zm96 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-84.7-36.7L566.6 320 544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7z" />
    </Icon>
);

export default AnchorCircleXmark;