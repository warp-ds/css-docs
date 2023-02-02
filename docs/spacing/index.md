# Spacing

## Padding

### Add padding to a single side

<container class="mt-8">
  <div class="flex flex-wrap items-start justify-center text-white text-sm font-bold leading-6">
    <div class="flex items-start">
      <div class="flex-none px-32">
        <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <box striped class="h-24 rounded-b-0" fg-color="var(--tw-white-fg)"></box>
          <div class="p-16">pt-24</div>
        </div>
      </div>
      <div class="flex-none px-5 pt-6">
        <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <div class="flex-none p-16">pr-16</div>
          <box striped class="flex-none w-16 rounded-l-0" fg-color="var(--tw-white-fg)" ></box>
        </div>
      </div>
    </div>
    <div class="flex items-start">
      <div class="flex-none px-5 pt-6">
        <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <div class="p-16">pb-32</div>
          <box striped class="h-32 rounded-t-0" fg-color="var(--tw-white-fg)"></box>
        </div>
      </div>
      <div class="flex-none flex px-5 pt-6">
        <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <box striped class="flex-none w-8" fg-color="var(--tw-white-fg)"></box>
          <div class="flex-none p-16">pl-8</div>
        </div>
      </div>
    </div>
  </div>
</container>

### Horizontal padding

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
        <box striped class="w-8 rounded-r-0" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">px-8</div>
        <box striped class="w-8 rounded-l-0" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

### Vertical padding

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
        <box striped class="h-8 rounded-b-0" fg-color="var(--tw-white-fg)"></box>
        <div class="p-16">py-8</div>
        <box striped class="h-8 rounded-t-0" fg-color="var(--tw-white-fg)"></box>
      </div>
    </div>
  </div>
</container>

### Padding on all sides

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="bg-violet-500 rounded-lg shadow-lg ">
        <box striped class="p-16" fg-color="var(--tw-white-fg)">
          <div class="bg-violet-500 p-16">p-16</div>
        </box>
      </div>
    </div>
  </div>
</container>

## Margin

### Add margin to a single side

<container bleeding class="mt-2">
  <div class="relative -my-8 -mx-4 rounded-xl overflow-auto">
    <div class="relative font-mono text-white text-sm font-bold leading-6 h-56">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 md:-ml-24">
        <box striped class="flow-root rounded-b-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="bg-purple-500 rounded-lg shadow-lg p-4 mt-6">mt-6</div>
        </box>
      </div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2">
        <box striped class="flow-root rounded-l-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="flex-none bg-purple-500 rounded-lg shadow-lg p-4 mr-4">mr-4</div>
        </box>
      </div>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 md:ml-24">
        <box striped class="flow-root rounded-t-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="bg-purple-500 rounded-lg shadow-lg p-4 mb-8">mb-8</div>
        </box>
      </div>
      <div class="absolute left-0 top-1/2 -translate-y-1/2">
        <box striped class="flow-root rounded-r-lg" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)" >
          <div class="flex-none bg-purple-500 rounded-lg shadow-lg p-4 ml-2">ml-2</div>
        </box>
      </div>
    </div>
  </div>
</container>

### Horizontal margin

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <box striped class="rounded-lg" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
        <div class="bg-indigo-500 rounded-lg shadow-lg p-4 mx-8">mx-8</div>
      </box>
    </div>
  </div>
</container>

### Vertical margin

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <box striped class="flow-root rounded-lg" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
        <div class="bg-pink-500 rounded-lg shadow-lg p-4 my-8">my-8</div>
      </box>
    </div>
  </div>
</container>

### Margin on all sides

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <box striped class="flow-root rounded-lg" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
        <div class="bg-blue-500 rounded-lg shadow-lg p-4 m-8">m-8</div>
      </box>
    </div>
  </div>
</container>

### Using negative values in margin

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <div class="flex flex-col items-center">
        <div class="relative w-36 h-16 bg-sky-400/20 border border-sky-700/10 rounded-md overflow-hidden"></div>
        <div class="relative -mt-8 bg-sky-500 rounded-md flex items-center justify-center p-4 shadow-lg">-mt-8</div>
      </div>
    </div>
  </div>
</container>

### Add horizontal space between children

<container class="mt-2">
  <div class="relative rounded-xl overflow-auto p-8">
    <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
      <box striped class="flex space-x-4 bg-stripes-fuchsia rounded-lg" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">01</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">03</div>
      </box>
    </div>
  </div>
</container>
