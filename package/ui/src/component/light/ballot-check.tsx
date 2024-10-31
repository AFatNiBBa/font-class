
import { Icon } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=light ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c17.7 0 32 14.3 32 32l0 384c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm96 128c0 8.8 7.2 16 16 16l176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0c-8.8 0-16 7.2-16 16zm32 128c0 8.8 7.2 16 16 16l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0c-8.8 0-16 7.2-16 16zM160 384c0 8.8 7.2 16 16 16l176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-176 0c-8.8 0-16 7.2-16 16zM88 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zM72 376l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zm91.3-132.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L104 257.4 91.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l24 24c6.2 6.2 16.4 6.2 22.6 0l48-48z" />
    </Icon>
);

export default BallotCheck;