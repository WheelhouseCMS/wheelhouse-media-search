// Search support for media tree

$.widget("wheelhouse.mediaTree", $.wheelhouse.mediaTree, {
  search: function(query) {
    this._load({
      url:    this.options.url + '?q=' + query,
      root:   this.element,
      target: this.element,
      appendDeselectItem: this.options.deselect
    });
  }
});


// Insert media popup

Wheelhouse.Popups.SearchableInsertMediaTab = Wheelhouse.Popups.InsertMediaTab.extend({
  html: '<input type="text" class="search-field" name="q" value="" placeholder="Search..." />' +
          Wheelhouse.Popups.InsertMediaTab.prototype.html,

  activate: function() {
    Wheelhouse.Popups.InsertMediaTab.prototype.activate.call(this);

    var tab = this;

    this.$F('q').keydown(function(e) {
      if (e.which == 13) { // Enter key
        e.preventDefault();

        tab.$('.media-tree').mediaTree('search', $(e.target).val());
      }
    });
  }
});

Wheelhouse.Popups.MediaPopup.prototype.tabs = [Wheelhouse.Popups.SearchableInsertMediaTab];


// Insert link popup

Wheelhouse.Popups.SearchableLinkToMediaTab = Wheelhouse.Popups.LinkToMediaTab.extend({
  html: '<div class="field"> \
           <input type="text" class="search-field" name="q" value="" placeholder="Search..." /> \
           <ul class="tree-selector media-tree"></ul> \
           <input type="hidden" name="url" /> \
         </div> \
         <div class="submit"> \
           <label class="checkbox"> \
             <input type="checkbox" name="new-window" /> Open in new window \
           </label> \
           <button type="submit">Update Link</button> \
         </div>',

  activate: function() {
   Wheelhouse.Popups.LinkToMediaTab.prototype.activate.call(this);

   var tab = this;

   this.$F('q').keydown(function(e) {
     if (e.which == 13) { // Enter key
       e.preventDefault();

       tab.$('.media-tree').mediaTree('search', $(e.target).val());
     }
   });
  }
});

Wheelhouse.Popups.LinkPopup.prototype.tabs[2] = Wheelhouse.Popups.SearchableLinkToMediaTab;


// Select image popup

Wheelhouse.Popups.SearchableMediaPickerTab = Wheelhouse.Popups.MediaPickerTab.extend({
  html: '<input type="text" class="search-field" name="q" value="" placeholder="Search..." />' +
          Wheelhouse.Popups.MediaPickerTab.prototype.html,

  activate: function() {
   Wheelhouse.Popups.MediaPickerTab.prototype.activate.call(this);

   var tab = this;

   this.$F('q').keydown(function(e) {
      if (e.which == 13) { // Enter key
        e.preventDefault();

        tab.$('.media-tree').mediaTree('search', $(e.target).val());
      }
   });
  }
});

Wheelhouse.Popups.MediaPicker.prototype.tabs = [Wheelhouse.Popups.SearchableMediaPickerTab];
