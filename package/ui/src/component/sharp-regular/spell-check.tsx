
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=sharp-regular spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M95.2 0l33.7 0 5.7 15.8L221.4 256l-51 0-14.5-40-87.8 0L53.6 256l-51 0L89.4 15.8 95.2 0zm43.4 168L112 94.6 85.5 168l53.1 0zM280 0l76 0c42 0 76 34 76 76c0 16.2-5.1 31.3-13.8 43.7C436.3 133.6 448 155.4 448 180c0 42-34 76-76 76l-92 0-24 0 0-24 0-104 0-104 0-24 24 0zM384 76c0-15.5-12.5-28-28-28l-52 0 0 56 52 0c15.5 0 28-12.5 28-28zM304 208l68 0c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0-52 0 0 56zm270.7 83.5l-17.1 16.8L368.8 493.9l-17 16.7L335 493.8l-104-104-17-17L248 338.9l17 17L352.1 443 524 274.1l17.1-16.8 33.7 34.2z" />
    </Icon>
);

export default SpellCheck;