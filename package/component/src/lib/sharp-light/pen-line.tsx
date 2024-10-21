
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=sharp-light pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M6.8 478L0 512l34-6.8L160 480 489.4 150.6 512 128l-22.6-22.6L406.6 22.6 384 0 361.4 22.6 32 352 6.8 478zm34-6.8L61.5 367.8 315.3 113.9l82.7 82.7L144.2 450.5 40.8 471.2zM466.7 128l-46.1 46.1L337.9 91.3 384 45.3 466.7 128zM240 480l-16 0 0 32 16 0 320 0 16 0 0-32-16 0-320 0z" />
    </Icon>
);

export default PenLine;