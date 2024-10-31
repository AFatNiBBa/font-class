
import { Icon, generic } from "../../index";

/**
 * A component that renders the `books` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=duotone books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32C0 14.3 14.3 0 32 0L96 0c17.7 0 32 14.3 32 32l0 64L0 96 0 32zm0 96l128 0 0 256L0 384 0 128zM0 416l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64L160 96l0-64zm0 96l128 0 0 256-128 0 0-256zm0 288l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM289.4 117.8c40.9-11 81.8-21.9 122.8-32.9l8.2 30.9L297.6 148.8l-8.2-30.9zm74.2 278.3c40.9-11 81.8-21.9 122.8-32.9l8.2 30.9L371.8 427c-2.7-10.3-5.5-20.6-8.2-30.9z" />
        <path d="M288 112.6l1.4 5.2L412.2 85 395.8 23.7c-4.5-17-22-27.1-38.9-22.6L295.5 17.6c-2.7 .7-5.2 1.8-7.5 3.1L288 96 160 96l0 32 128 0 0-15.4zm132.4 3.2L297.6 148.8l66 247.4 122.8-32.9-66-247.4zM388.2 488.3c4.5 17 22 27.1 38.9 22.6l61.4-16.5c16.9-4.6 27-22.1 22.5-39.1l-16.3-61.1L371.8 427l16.3 61.3zM0 96l0 32 128 0 0-32L0 96zM128 384L0 384l0 32 128 0 0-32zm160 0l-128 0 0 32 128 0 0-32z" />
    </Icon>
);

export default Books;