
import { Icon } from "../../index";

/**
 * A component that renders the `dice-three` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-three?s=sharp-thin dice-three}
 * @preview ![dice-three](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dice-three.svg)
 */
const DiceThree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM144 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM336 352a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default DiceThree;