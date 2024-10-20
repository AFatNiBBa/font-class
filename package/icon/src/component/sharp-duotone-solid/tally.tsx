
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally?s=sharp-duotone-solid tally}
 * @preview ![tally](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tally.svg)
 */
const Tally: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l64 0 0 32 0 214.5c-21.3 7.5-42.7 15.1-64 22.6L96 64l0-32zm0 337l64-22.6L160 448l0 32-64 0 0-32 0-79zM224 32l64 0 0 32 0 169.4-64 22.6L224 64l0-32zm0 291.8c21.3-7.5 42.7-15.1 64-22.6L288 448l0 32-64 0 0-32 0-124.2zM352 32l64 0 0 32 0 124.2c-21.3 7.5-42.7 15.1-64 22.6L352 64l0-32zm0 246.6c21.3-7.5 42.7-15.1 64-22.6L416 448l0 32-64 0 0-32 0-169.4zM480 32l64 0 0 32 0 79c-21.3 7.5-42.7 15.1-64 22.6L480 64l0-32zm0 201.5c21.3-7.5 42.7-15.1 64-22.6L544 448l0 32-64 0 0-32 0-214.5z" />
        <path d="M632.8 179.5l-30.2 10.7-544 192L28.5 392.8 7.2 332.5l30.2-10.6 544-192 30.2-10.7 21.3 60.4z" />
    </Icon>
);

export default Tally;