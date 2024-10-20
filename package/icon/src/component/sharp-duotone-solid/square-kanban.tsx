
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-duotone-solid square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l64 0 0 192-64 0 0-192zm96 0l64 0 0 128-64 0 0-128zm96 0l64 0 0 256-64 0 0-256z" />
        <path d="M288 384l64 0 0-256-64 0 0 256zM96 320l64 0 0-192-64 0 0 192zm160-64l0-128-64 0 0 128 64 0z" />
    </Icon>
);

export default SquareKanban;