
import { Icon } from "../../index";

/**
 * A component that renders the `face-worried` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-worried?s=sharp-thin face-worried}
 * @preview ![face-worried](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-worried.svg)
 */
const FaceWorried: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM340 428c-24-12.6-52.9-20-84-20c-31.1 0-60 7.4-84 20l-13.1 6.9 1.4-14.8C165 372.7 206.3 336 256 336s91 36.7 95.7 84.2l1.4 14.8L340 428zm-84-76c-36.4 0-66.9 23.3-76.7 55c23-9.6 49.1-15 76.7-15c27.6 0 53.7 5.4 76.8 15c-9.8-31.7-40.3-55-76.8-55zm-95.6-80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM200.5 143.5l-8 .5c-32.5 2-61.6 16.5-82.7 38.7l-5.5 5.8-11.6-11 5.5-5.8c23.7-25.1 56.6-41.4 93.3-43.7l8-.5 1 16zm119 .5l-8-.5 1-16 8 .5c36.7 2.3 69.6 18.6 93.3 43.7l5.5 5.8-11.6 11-5.5-5.8C381.1 160.5 352 146 319.5 144z" />
    </Icon>
);

export default FaceWorried;