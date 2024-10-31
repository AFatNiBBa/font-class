
import { Icon } from "../../index";

/**
 * A component that renders the `file-svg` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-svg?s=sharp-solid file-svg}
 * @preview ![file-svg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-svg.svg)
 */
const FileSvg: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0zM384 128l-128 0L256 0 384 128zM205.7 352l26.3 0 16 0 0 32-16 0-26.3 0c-7.5 0-13.7 6.1-13.7 13.7c0 5.2 2.9 9.9 7.6 12.2l31.2 15.6c15.5 7.7 25.2 23.5 25.2 40.8c0 25.2-20.4 45.7-45.7 45.7L176 512l-16 0 0-32 16 0 34.3 0c7.5 0 13.7-6.1 13.7-13.7c0-5.2-2.9-9.9-7.6-12.2l-31.2-15.6C169.8 430.8 160 415 160 397.7c0-25.2 20.4-45.7 45.7-45.7zM320 368l0 35c0 17.3 3.1 34.4 9.2 50.6l6.8 18.2 6.8-18.2c6.1-16.2 9.2-33.3 9.2-50.6l0-35 0-16 32 0 0 16 0 35c0 21.1-3.8 42-11.2 61.8L359 501.6 355.1 512 344 512l-16 0-11.1 0L313 501.6l-13.8-36.8C291.8 445 288 424.1 288 403l0-35 0-16 32 0 0 16zm96 24c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 16-32 0 0-16c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8-16 0 0-32 16 0 16 0 16 0 0 16 0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80z" />
    </Icon>
);

export default FileSvg;