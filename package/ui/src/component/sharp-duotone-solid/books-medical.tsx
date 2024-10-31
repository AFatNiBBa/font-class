
import { Icon, generic } from "../../index";

/**
 * A component that renders the `books-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books-medical?s=sharp-duotone-solid books-medical}
 * @preview ![books-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/books-medical.svg)
 */
const BooksMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 0L192 0l0 96L64 96 64 0zm0 416l128 0 0 96L64 512l0-96zM224 0L352 0l0 24.7L352 96 224 96l0-96zm0 128l128 0 0-9.8c39.1-10.5 78.2-20.9 117.3-31.4c2.8 10.3 5.6 20.6 8.4 30.9L352.2 151.3l-.2-.6L352 384l-128 0 0-256zm0 288l128 0 0 96-128 0 0-96zm195.4-17.7l125.5-33.6 8.4 30.9L427.8 429.2l-8.4-30.9z" />
        <path d="M352 118.2l0 9.8-128 0 0-32 128 0 0-71.3L445.7 0l23.6 86.8L352 118.2zm.2 33.1l125.5-33.6 67.2 247L419.4 398.3l-67.2-247zm75.6 277.9l125.5-33.6L576 478.9 450.3 512l-22.5-82.8zM192 96l0 32L64 128l0-32 128 0zM64 416l0-32 128 0 0 32L64 416zm160-32l128 0 0 32-128 0 0-32zM64 160l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64L0 288l0-64 64 0 0-64z" />
    </Icon>
);

export default BooksMedical;