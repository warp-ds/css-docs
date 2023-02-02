<script setup>
const exampleClasses = 'p-24 rounded-2 text-white flex items-center justify-center'
</script>

# Flex

## flex-initial

<width-controller>
  <container>
    <box striped class="flex gap-8" fg-color="rgba(2,132,199, 0.5)">
      <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
      <div class="w-64 flex-initial bg-sky-600" :class="exampleClasses">02</div>
      <div class="w-32 flex-initial bg-sky-600" :class="exampleClasses">03</div>
    </box>
  </container>
</width-controller>

## flex-1

<width-controller>
  <container>
    <box striped class="flex gap-8" fg-color="rgba(2,132,199, 0.5)">
      <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
      <div class="w-64 flex-1 bg-sky-600" :class="exampleClasses">02</div>
      <div class="w-32 flex-1 bg-sky-600" :class="exampleClasses">03</div>
    </box>
  </container>
</width-controller>

## flex-auto

<width-controller>
  <container>
    <box striped class="flex gap-8" fg-color="rgba(2,132,199, 0.5)">
      <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
      <div class="w-64 flex-auto bg-sky-600" :class="exampleClasses">02</div>
      <div class="w-32 flex-auto bg-sky-600" :class="exampleClasses">03</div>
    </box>
  </container>
</width-controller>
