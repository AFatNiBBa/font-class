
import { Icon } from "../../index";

/**
 * A component that renders the `file-circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-check?s=sharp-light file-circle-check}
 * @preview ![file-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-circle-check.svg)
 */
const FileCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 19.2c10.1-5.2 20.8-9.4 32-12.6l0-46.6L232 0 32 0 0 0 0 32 0 480l0 32 32 0 298.8 0c-12.9-9.1-24.5-19.9-34.6-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm78.6-176L488 313.4l-11.3 11.3L416 385.4l-28.7-28.7L376 345.4 353.4 368l11.3 11.3 40 40L416 430.6l11.3-11.3 72-72L510.6 336z" />
    </Icon>
);

export default FileCircleCheck;