
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-mov` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mov?s=sharp-duotone-solid file-mov}
 * @preview ![file-mov](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-mov.svg)
 */
const FileMov: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144L80 304l0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM256 368l0-16-16 0-5.6 0-9.6 0-4.5 8.5-28.5 53.8-29.7-54-4.6-8.3-9.5 0-4 0-16 0 0 16 0 128 0 16 32 0 0-16 0-73 18 32.7 14.3 26 13.9-26.2L224 421.8l0 74.2 0 16 32 0 0-16 0-128zm192 0l0-16-32 0 0 16 0 35c0 21.1 3.8 42 11.2 61.8L441 501.6l3.9 10.4 11.1 0 16 0 11.1 0 3.9-10.4 13.8-36.8C508.2 445 512 424.1 512 403l0-35 0-16-32 0 0 16 0 35c0 17.3-3.1 34.4-9.2 50.6L464 471.8l-6.8-18.2c-6.1-16.2-9.2-33.3-9.2-50.6l0-35zM288 392l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-80c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm40-8l16 0c4.4 0 8 3.6 8 8l0 80c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default FileMov;