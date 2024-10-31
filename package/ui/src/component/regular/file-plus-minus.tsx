
import { Icon } from "../../index";

/**
 * A component that renders the `file-plus-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=regular file-plus-minus}
 * @preview ![file-plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-plus-minus.svg)
 */
const FilePlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zM216 200c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-40zM128 384c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0z" />
    </Icon>
);

export default FilePlusMinus;