<template>
  <div>
    <div class="ui form">
        <div class="fields">
          <div class="six wide field">
              <sui-dropdown
                fluid
                multiple
                :max-selections="3"
                :options="skills"
                placeholder="Skills"
                selection
                v-model="current"
              />
          </div>
            <div class="ten wide field">
            <div class="ui icon input">
              <input type="text" placeholder="Search...">
              <i class="inverted circular search link icon"></i>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchDataCategory',
  data () {
    return {
      current: null,
      skills: [
        { key: 'angular', text: 'Angular', value: 'angular' },
        { key: 'css', text: 'CSS', value: 'css' },
        { key: 'design', text: 'Graphic Design', value: 'design' },
        { key: 'ember', text: 'Ember', value: 'ember' },
        { key: 'html', text: 'HTML', value: 'html' },
        { key: 'ia', text: 'Information Architecture', value: 'ia' },
        { key: 'javascript', text: 'Javascript', value: 'javascript' },
        { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { key: 'meteor', text: 'Meteor', value: 'meteor' },
        { key: 'node', text: 'NodeJS', value: 'node' },
        { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { key: 'python', text: 'Python', value: 'python' },
        { key: 'rails', text: 'Rails', value: 'rails' },
        { key: 'react', text: 'React', value: 'react' },
        { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { key: 'ruby', text: 'Ruby', value: 'ruby' },
        { key: 'ui', text: 'UI Design', value: 'ui' },
        { key: 'ux', text: 'User Experience', value: 'ux' }
      ]
    }
  }
}
</script>
