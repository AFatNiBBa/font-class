
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chopsticks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chopsticks?s=sharp-duotone-solid chopsticks}
 * @preview ![chopsticks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ5MWwyNC42IDE5LjRjOTAuNi0xMDIuOSAxODEuMS0yMDUuNyAyNzEuNy0zMDguNWMtMjAuMi0xNi4xLTQwLjMtMzIuMy02MC41LTQ4LjRDMTU3LjIgMjY2IDc4LjYgMzc4LjUgMCA0OTF6bTEyOS0yLjhMMTQ5LjQgNTEyQzI1NyA0MjkuNCAzNjQuNyAzNDYuOCA0NzIuMyAyNjQuM2MtMTcuOC0xNy44LTM1LjUtMzUuNS01My4yLTUzLjJjLTk2LjcgOTIuNC0xOTMuNCAxODQuOC0yOTAgMjc3LjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOTYuMyAyMDEuOWwtNjAuNS00OC40TDM0My4xIDBsNzcuNSA2MC45LTEyNC4yIDE0MXptMTc1LjkgNjIuNEw0MTkgMjExIDU3NiA2MWw2NCA3NC42TDQ3Mi4zIDI2NC4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Chopsticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 491l24.6 19.4c90.6-102.9 181.1-205.7 271.7-308.5c-20.2-16.1-40.3-32.3-60.5-48.4C157.2 266 78.6 378.5 0 491zm129-2.8L149.4 512C257 429.4 364.7 346.8 472.3 264.3c-17.8-17.8-35.5-35.5-53.2-53.2c-96.7 92.4-193.4 184.8-290 277.2z" />
            <path d="M296.3 201.9l-60.5-48.4L343.1 0l77.5 60.9-124.2 141zm175.9 62.4L419 211 576 61l64 74.6L472.3 264.3z" />
    </Icon>
);

export default Chopsticks;