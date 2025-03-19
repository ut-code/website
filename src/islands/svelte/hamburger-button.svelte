<script lang="ts">
  import { Popover } from "bits-ui";
  import { fade } from "svelte/transition";

  const { links }: { links: { href: string; title: string }[] } = $props();
</script>

<Popover.Root>
  <Popover.Trigger class="h-16 w-16 hover:bg-gray-100 lg:hidden">
    <div class="mx-auto my-auto h-6 w-6 text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-menu"
        ><line x1="3" y1="12" x2="21" y2="12"></line><line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
        ></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
      >
    </div>
  </Popover.Trigger>

  <Popover.Content align="end" side="bottom" strategy="fixed">
    <div
      transition:fade|global={{ duration: 70 }}
      class="w-[100vw] bg-white transition-opacity duration-300 lg:hidden"
    >
      <ul>
        {#each links as link}
          <li class="hover:bg-gray-200">
            <a
              href={link.href}
              class="block px-4 py-2"
              data-astro-prefetch="viewport"
            >
              {link.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </Popover.Content>
</Popover.Root>
