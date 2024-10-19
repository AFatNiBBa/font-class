
import { Icon } from "../../index";

/**
 * A component that renders the `scroll` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=sharp-thin scroll}
 * @preview ![scroll](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMTA0YzAtMzAuOSAyNS4xLTU2IDU2LTU2czU2IDI1LjEgNTYgNTZsMCAyOTZjMCA0NC4yIDM1LjggODAgODAgODBsMjg4IDBjNDQuMiAwIDgwLTM1LjggODAtODBsMC01NiAwLTgtOCAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC0uNyAwLS43IDAtLjcgMC04IDAgMCA4IDAgNTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRzLTY0LTI4LjctNjQtNjRsMC0yOTZjMC0yMi42LTEwLjQtNDIuOC0yNi43LTU2TDQwOCA0OGMzMC45IDAgNTYgMjUuMSA1NiA1NmwwIDIwMCAxNiAwIDAtMjAwYzAtMzkuOC0zMi4yLTcyLTcyLTcyTDcyIDMyQzMyLjIgMzIgMCA2NC4yIDAgMTA0bDAgOTYgMCA4IDggMCA4OCAwIDAtMTYtODAgMCAwLTg4ek00OTYgNDY0bC0yNDAgMGMxOS40LTE0LjYgMzItMzcuOCAzMi02NGwwLTQ4IC4yIDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC43IDAgLjcgMCAuNyAwIC4yIDAgMCA0OGMwIDM1LjMtMjguNyA2NC02NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scroll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 104c0-30.9 25.1-56 56-56s56 25.1 56 56l0 296c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-56 0-8-8 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-.7 0-8 0 0 8 0 56c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-296c0-22.6-10.4-42.8-26.7-56L408 48c30.9 0 56 25.1 56 56l0 200 16 0 0-200c0-39.8-32.2-72-72-72L72 32C32.2 32 0 64.2 0 104l0 96 0 8 8 0 88 0 0-16-80 0 0-88zM496 464l-240 0c19.4-14.6 32-37.8 32-64l0-48 .2 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .7 0 .2 0 0 48c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default Scroll;