
import { Icon } from "../../index";

/**
 * A component that renders the `truck-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=thin truck-clock}
 * @preview ![truck-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-clock.svg)
 */
const TruckClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 288c0 26.5 21.5 48 48 48l3.3 0c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64L400 400l0-336c0-26.5-21.5-48-48-48L64 16zm.4 400l-.4 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 32 58.7 0c10.6 0 20.8 4.2 28.3 11.7L596.3 201c7.5 7.5 11.7 17.7 11.7 28.3L608 400l24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56.4 0c.2 2.6 .4 5.3 .4 8c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8l-.4 0-160.4 0c.2 2.6 .4 5.3 .4 8c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8zM416 216l172 0c-.9-1.3-1.9-2.6-3-3.7L491.7 119c-4.5-4.5-10.6-7-17-7L416 112l0 104zm0 16l0 141.4c15.9-22.6 42.2-37.4 72-37.4c40.3 0 74.2 27.1 84.7 64l19.3 0 0-168-176 0zM224 424A72 72 0 1 0 80 424a72 72 0 1 0 144 0zm264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144zM208 272a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 56l0 56 40 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default TruckClock;