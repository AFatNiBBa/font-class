
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=light shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M411.4 175.5c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-192 0c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l96-160C266.3 5.9 276.8 0 288 0s21.7 5.9 27.4 15.5l96 160zM288 32L192 192l192 0L288 32zM472 304l-144 0c-4.4 0-8 3.6-8 8l0 144c0 4.4 3.6 8 8 8l144 0c4.4 0 8-3.6 8-8l0-144c0-4.4-3.6-8-8-8zM328 272l144 0c22.1 0 40 17.9 40 40l0 144c0 22.1-17.9 40-40 40l-144 0c-22.1 0-40-17.9-40-40l0-144c0-22.1 17.9-40 40-40zM224 384A96 96 0 1 0 32 384a96 96 0 1 0 192 0zM0 384a128 128 0 1 1 256 0A128 128 0 1 1 0 384z" />
    </Icon>
);

export default Shapes;