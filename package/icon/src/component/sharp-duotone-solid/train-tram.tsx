
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-tram` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tram?s=sharp-duotone-solid train-tram}
 * @preview ![train-tram](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/train-tram.svg)
 */
const TrainTram: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M8.6 45.6L39.4 82.4 80.7 48 200 48l0 48 48 0 0-48 119.3 0 41.3 34.4 30.7-36.9-48-40L384.7 0 376 0 72 0 63.3 0 56.6 5.6l-48 40zM40 512l80 0 64-64-80 0L40 512zm88-352c0 32 0 64 0 96l192 0c0-32 0-64 0-96l-192 0zM264 448l64 64 80 0-64-64-80 0z" />
        <path d="M384 96L64 96l0 352 320 0 0-352zm-64 64l0 96-192 0 0-96 192 0zM128 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TrainTram;