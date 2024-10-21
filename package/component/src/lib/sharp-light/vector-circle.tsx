
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=sharp-light vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0 18.4 0 32.5L288 96l-64 0 0-64 64 0zm32 26l0-26 0-32L288 0 224 0 192 0l0 32 0 26C128.6 78.5 78.5 128.6 58 192l-26 0L0 192l0 32 0 64 0 32 32 0 26 0c20.5 63.4 70.6 113.5 134 134l0 26 0 32 32 0 64 0 32 0 0-32 0-26c63.4-20.5 113.5-70.6 134-134l26 0 32 0 0-32 0-64 0-32-32 0-26 0C433.5 128.6 383.4 78.5 320 58zm0 34c45.7 17.9 82.1 54.3 100 100l-4 0-32 0 0 32 0 64 0 32 32 0 4 0c-17.9 45.7-54.3 82.1-100 100l0-4 0-32-32 0-64 0-32 0 0 32 0 4c-45.7-17.9-82.1-54.3-100-100l4 0 32 0 0-32 0-64 0-32-32 0-4 0c17.9-45.7 54.3-82.1 100-100l0 4 0 32 32 0 64 0 32 0 0-32 0-4zM429.1 224s0 0 0 0l32.5 0s0 0 0 0l18.4 0 0 64-64 0 0-64 13.1 0zM288 429.1l0 32.5 0 18.4-64 0 0-64 64 0 0 13.1zM50.4 224s0 0 0 0l32.5 0s0 0 0 0L96 224l0 64-64 0 0-64 18.4 0z" />
    </Icon>
);

export default VectorCircle;