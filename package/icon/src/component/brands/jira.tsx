
import { Icon } from "../../index";

/**
 * A component that renders the `jira` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jira?s=brands jira}
 * @preview ![jira](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/jira.svg)
 */
const Jira: typeof Icon = x => (
    <Icon viewBox="0 0 496 512" {...x}>
        <path d="M490 241.7C417.1 169 320.6 71.8 248.5 0 83 164.9 6 241.7 6 241.7c-7.9 7.9-7.9 20.7 0 28.7C138.8 402.7 67.8 331.9 248.5 512c379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zm-241.5 90l-76-75.7 76-75.7 76 75.7-76 75.7z" />
    </Icon>
);

export default Jira;