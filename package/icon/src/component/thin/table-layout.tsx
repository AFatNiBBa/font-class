
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=thin table-layout}
 * @preview ![table-layout](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjU0IDUwLjc0NEM0ODEuNjc0IDM5LjE2NCA0NjUuNjc0IDMyIDQ0OCAzMkg2NEM0Ni4zMjYgMzIgMzAuMzI2IDM5LjE2NCAxOC43NDYgNTAuNzQ0QzcuMTY0IDYyLjMyNiAwIDc4LjMyNiAwIDk2VjQxNkMwIDQzMy42NzQgNy4xNjQgNDQ5LjY3NCAxOC43NDYgNDYxLjI1NEMzMC4zMjYgNDcyLjgzNiA0Ni4zMjYgNDgwIDY0IDQ4MEg0NDhDNDY1LjY3NCA0ODAgNDgxLjY3NCA0NzIuODM2IDQ5My4yNTQgNDYxLjI1NEM1MDQuODM2IDQ0OS42NzQgNTEyIDQzMy42NzQgNTEyIDQxNlY5NkM1MTIgNzguMzI2IDUwNC44MzYgNjIuMzI2IDQ5My4yNTQgNTAuNzQ0Wk0xMzYgNDY0SDY0QzUxLjE3OCA0NjQgMzkuMTI1IDQ1OS4wMDggMzAuMDYxIDQ0OS45NDFDMjAuOTk0IDQ0MC44NzUgMTYgNDI4LjgyIDE2IDQxNlYxODRIMTM2VjQ2NFpNNDk2IDQxNkM0OTYgNDI4LjgyIDQ5MS4wMDYgNDQwLjg3NSA0ODEuOTM5IDQ0OS45NDFDNDcyLjg3NSA0NTkuMDA4IDQ2MC44MjIgNDY0IDQ0OCA0NjRIMTUyVjE4NEg0OTZWNDE2Wk00OTYgMTY4SDE2Vjk2QzE2IDgzLjE4IDIwLjk5NCA3MS4xMjUgMzAuMDYxIDYyLjA1OUMzOS4xMjUgNTIuOTkyIDUxLjE3OCA0OCA2NCA0OEg0NDhDNDYwLjgyMiA0OCA0NzIuODc1IDUyLjk5MiA0ODEuOTM5IDYyLjA1OUM0OTEuMDA2IDcxLjEyNSA0OTYgODMuMTggNDk2IDk2VjE2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TableLayout(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.254 50.744C481.674 39.164 465.674 32 448 32H64C46.326 32 30.326 39.164 18.746 50.744C7.164 62.326 0 78.326 0 96V416C0 433.674 7.164 449.674 18.746 461.254C30.326 472.836 46.326 480 64 480H448C465.674 480 481.674 472.836 493.254 461.254C504.836 449.674 512 433.674 512 416V96C512 78.326 504.836 62.326 493.254 50.744ZM136 464H64C51.178 464 39.125 459.008 30.061 449.941C20.994 440.875 16 428.82 16 416V184H136V464ZM496 416C496 428.82 491.006 440.875 481.939 449.941C472.875 459.008 460.822 464 448 464H152V184H496V416ZM496 168H16V96C16 83.18 20.994 71.125 30.061 62.059C39.125 52.992 51.178 48 64 48H448C460.822 48 472.875 52.992 481.939 62.059C491.006 71.125 496 83.18 496 96V168Z" />
        </Icon>
    </>
}