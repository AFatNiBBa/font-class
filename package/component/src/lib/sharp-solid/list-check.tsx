
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-solid list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M169.9 54.2L153.8 72.1l-72 80L64.9 170.9 47 153 7 113l-17-17L24 62.1 41 79l22.1 22.1 55.1-61.2 16.1-17.8 35.7 32.1zm0 160l-16.1 17.8-72 80L64.9 330.9 47 313 7 273l-17-17L24 222.1l17 17 22.1 22.1 55.1-61.2 16.1-17.8 35.7 32.1zM224 64l32 0 224 0 32 0 0 64-32 0-224 0-32 0 0-64zm0 160l32 0 224 0 32 0 0 64-32 0-224 0-32 0 0-64zM160 384l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default ListCheck;