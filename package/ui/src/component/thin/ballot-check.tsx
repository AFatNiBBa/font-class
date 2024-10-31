
import { Icon } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=thin ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM192 128c0 4.4 3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0c-4.4 0-8 3.6-8 8zm0 128c0 4.4 3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0c-4.4 0-8 3.6-8 8zm0 128c0 4.4 3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0c-4.4 0-8 3.6-8 8zm-56-8c0-17.7-14.3-32-32-32l-16 0c-17.7 0-32 14.3-32 32l0 16c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-16zm-64 0c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zM88 88c-17.7 0-32 14.3-32 32l0 16c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-16c0-17.7-14.3-32-32-32L88 88zm0 16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm69.7 125.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L96 268.7 69.7 242.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l32 32c3.1 3.1 8.2 3.1 11.3 0l56-56z" />
    </Icon>
);

export default BallotCheck;