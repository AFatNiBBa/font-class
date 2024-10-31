
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=thin pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 80c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm0 264c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zm128 0c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zM96 144l320 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L96 240c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zM64 160l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Pager;