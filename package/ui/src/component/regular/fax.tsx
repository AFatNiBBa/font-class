
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=regular fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 64c0-8.8 7.2-16 16-16l191.4 0c4.2 0 8.3 1.7 11.3 4.7l32.6 32.6c3 3 4.7 7.1 4.7 11.3l0 63.4 48 0 0-63.4c0-17-6.7-33.3-18.7-45.3L428.7 18.7C416.7 6.7 400.4 0 383.4 0L192 0c-35.3 0-64 28.7-64 64l0 66c-5.1-1.3-10.5-2-16-2l-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l32 0 16 0 336 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-272 0 0-128zm0 176l272 0c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16l-274 0c1.3-5.1 2-10.5 2-16l0-208zM112 464l-16 0-32 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 24 0 232c0 8.8-7.2 16-16 16zM272 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM240 400a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM368 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM336 400a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Fax;