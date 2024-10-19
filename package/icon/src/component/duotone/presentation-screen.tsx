
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `presentation-screen` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=duotone presentation-screen}
 * @preview ![presentation-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAzNTIuMDRINjRDNDYuMzc1IDM1Mi4wNCAzMiAzMzcuNjYzIDMyIDMyMC4wMzZWNjQuMDA3SDk2VjI4OC4wMzJINDgwVjY0LjAwN0g1NDRWMzIwLjAzNkM1NDQgMzM3LjY2MyA1MjkuNjI1IDM1Mi4wNCA1MTIgMzUyLjA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NDMuOTk4IDBIMzEuOTk4QzE0LjMyNiAwIDAgMTQuMzI2IDAgMzEuOTk4VjMyLjAwOUMwIDQ5LjY4MSAxNC4zMjYgNjQuMDA3IDMxLjk5OCA2NC4wMDdINTQzLjk5OEM1NjEuNjcyIDY0LjAwNyA1NzYgNDkuNjggNTc2IDMyLjAwNlYzMi4wMDJDNTc2IDE0LjMyOCA1NjEuNjcyIDAgNTQzLjk5OCAwWk0zMjAgMzg2Ljc5NFYzNTIuMDRIMjU2VjM4Ni43OTRMMTgwLjc1IDQ2Mi4wNTNDMTc0LjUgNDY4LjMwMyAxNzQuNSA0NzguNTU0IDE4MC43NSA0ODQuODA1TDIwMy4yNSA1MDcuMzA3QzIwOS41IDUxMy41NTggMjE5Ljc1IDUxMy41NTggMjI2IDUwNy4zMDdMMjg4IDQ0NS4zTDM1MCA1MDcuMzA3QzM1Ni4yNSA1MTMuNTU4IDM2Ni41IDUxMy41NTggMzcyLjc1IDUwNy4zMDdMMzk1LjI1IDQ4NC44MDVDNDAxLjUgNDc4LjU1NCA0MDEuNSA0NjguMzAzIDM5NS4yNSA0NjIuMDUzTDMyMCAzODYuNzk0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PresentationScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M512 352.04H64C46.375 352.04 32 337.663 32 320.036V64.007H96V288.032H480V64.007H544V320.036C544 337.663 529.625 352.04 512 352.04Z" />
            <path d="M543.998 0H31.998C14.326 0 0 14.326 0 31.998V32.009C0 49.681 14.326 64.007 31.998 64.007H543.998C561.672 64.007 576 49.68 576 32.006V32.002C576 14.328 561.672 0 543.998 0ZM320 386.794V352.04H256V386.794L180.75 462.053C174.5 468.303 174.5 478.554 180.75 484.805L203.25 507.307C209.5 513.558 219.75 513.558 226 507.307L288 445.3L350 507.307C356.25 513.558 366.5 513.558 372.75 507.307L395.25 484.805C401.5 478.554 401.5 468.303 395.25 462.053L320 386.794Z" />
        </Icon>
    </>
}