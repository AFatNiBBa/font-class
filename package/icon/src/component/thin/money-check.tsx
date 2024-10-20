
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=thin money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L64 80zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM104 240l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM96 344c0-4.4 3.6-8 8-8l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-368 0c-4.4 0-8-3.6-8-8zM360 176c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-80 0zm-40 24c0-22.1 17.9-40 40-40l80 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-80 0c-22.1 0-40-17.9-40-40l0-32z" />
    </Icon>
);

export default MoneyCheck;