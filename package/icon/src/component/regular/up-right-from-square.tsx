
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=regular up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 41c0 10.9 4.3 21.3 12 29L362.1 116 207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l155-155L442.1 196c7.7 7.7 18.1 12 29 12c22.6 0 41-18.3 41-41l0-127c0-22.1-17.9-40-40-40L345 0c-22.6 0-41 18.3-41 41zm57.9 7L464 48l0 102.1L361.9 48zM72 32C32.2 32 0 64.2 0 104L0 440c0 39.8 32.2 72 72 72l336 0c39.8 0 72-32.2 72-72l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128c0 13.3-10.7 24-24 24L72 464c-13.3 0-24-10.7-24-24l0-336c0-13.3 10.7-24 24-24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 32z" />
    </Icon>
);

export default UpRightFromSquare;