
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=sharp-light signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 3.4c0 26.2-2.4 52.3-7.2 78L107.8 256.6 96 259.8 96 272l0 192 0 16 16 0 80 0 9.4 0 4.6-8.2L247.5 398c20.9-37.1 37.2-76.5 48.5-117.5l7.2-25.7c1.8-6.5 3.5-13 5-19.6l125.5-34.2-48 96L374.1 320l25.9 0 160 0 16 0 0-32-16 0-134.1 0 52.4-104.8 16-32-34.5 9.4L314.8 200.1c3.4-22.7 5.2-45.7 5.2-68.7l0-3.4c0-53-43-96-96-96s-96 43-96 96l0 48 0 16 32 0 0-16 0-48zM128 284.2l144.7-39.5-.4 1.4-7.2 25.7c-10.7 38.5-26 75.6-45.6 110.4l-37 65.7L128 448l0-163.8zM16 384L0 384l0 32 16 0 32 0 16 0 0-32-16 0-32 0zm320 0l-16 0 0 32 16 0 288 0 16 0 0-32-16 0-288 0z" />
    </Icon>
);

export default Signature;