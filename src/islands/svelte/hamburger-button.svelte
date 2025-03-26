<script lang="ts">
  import { Popover } from "bits-ui";
  import { fade } from "svelte/transition";

  const { links }: { links: { href: string; title: string }[] } = $props();
</script>

<Popover.Root>
  <Popover.Trigger class="h-16 w-16 hover:bg-gray-200 lg:hidden">
    <div class="mx-auto my-auto h-6 w-6 text-gray-600">
      <img src="/icons/menu.svg" alt="open menu" />
    </div>
  </Popover.Trigger>

  <Popover.Content align="end" side="bottom" strategy="fixed">
    <div
      transition:fade|global={{ duration: 70 }}
      class="w-[100vw] bg-gray-50 transition-opacity duration-300 lg:hidden"
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
