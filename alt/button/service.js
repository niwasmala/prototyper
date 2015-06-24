define([
], function(){
    // service for creating button
    alt.factory('$button', ['$log', function($log){
        return function(type, data){
            type = type || '';
            data = data || {};

            var buttons = {
                'login'             : {
                    'title'         : 'Login',
                    'title_clicked' : 'Logging in...',
                    'description'   : 'Login',
                    'icon'          : '',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'class'         : 'btn btn-primary btn-large btn-block',
                    'type'          : 'submit',
                    'style'         : 'width: 100%;',
                    'disabled'      : false
                },
                'excel'             : {
                    'title'         : 'Excel',
                    'description'   : 'Download Excel',
                    'icon'          : 'icon-cloud-download',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'class'         : 'btn btn-info hidden-xs',
                    'disabled'      : false
                },
                'reset'             : {
                    'title'         : 'Reset',
                    'description'   : 'Reset',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-refresh',
                    'class'         : 'btn btn-warning',
                    'disabled'      : false
                },
                'reload'            : {
                    'title'         : 'Reload',
                    'description'   : 'Reload',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-rotate-left',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'add'               : {
                    'title'         : 'Tambah',
                    'description'   : 'Tambah',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-plus-sign',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'back'              : {
                    'title'         : 'Kembali',
                    'description'   : 'Kembali',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-circle-arrow-left',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'save'              : {
                    'title'         : 'Simpan',
                    'description'   : 'Simpan',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-save',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'print'             : {
                    'title'         : 'Print',
                    'description'   : 'Print',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-print',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'email'             : {
                    'title'         : 'Email',
                    'description'   : 'Email',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-envelope',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'view'              : {
                    'title'         : 'Lihat',
                    'description'   : 'Lihat',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-search',
                    'class'         : 'btn btn-info',
                    'disabled'      : false
                },
                'edit'              : {
                    'title'         : 'Edit',
                    'description'   : 'Edit',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-edit',
                    'class'         : 'btn btn-warning',
                    'disabled'      : false
                },
                'remove'            : {
                    'title'         : 'Hapus',
                    'description'   : 'Hapus',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-trash',
                    'class'         : 'btn btn-danger',
                    'disabled'      : false
                },
                'yes'               : {
                    'title'         : 'Ya',
                    'description'   : 'Ya',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-ok',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'no'                : {
                    'title'         : 'Tidak',
                    'description'   : 'Tidak',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-remove',
                    'class'         : 'btn btn-danger',
                    'disabled'      : false
                },
                'cancel'            : {
                    'title'         : 'Batal',
                    'description'   : 'Batal',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-remove',
                    'class'         : 'btn btn-danger',
                    'disabled'      : false
                },
                'approve'           : {
                    'title'         : 'Approve',
                    'description'   : 'Approve',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-ok',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'reject'            : {
                    'title'         : 'Reject',
                    'description'   : 'Reject',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-remove',
                    'class'         : 'btn btn-danger',
                    'disabled'      : false
                },
                'search'            : {
                    'title'         : 'Cari',
                    'description'   : 'Cari',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-search',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'preview'           : {
                    'title'         : 'Preview',
                    'description'   : 'Preview',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-file-text-alt',
                    'class'         : 'btn btn-info',
                    'disabled'      : false
                },
                'open'              : {
                    'title'         : 'Buka',
                    'description'   : 'Buka',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-folder-open',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'close'             : {
                    'title'         : 'Tutup',
                    'description'   : 'Tutup',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'next'              : {
                    'title'         : 'Berikutnya',
                    'description'   : 'Berikutnya',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'prev'              : {
                    'title'         : 'Sebelumnya',
                    'description'   : 'Sebelumnya',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'zoomin'            : {
                    'title'         : 'Zoom In',
                    'description'   : 'Zoom In',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'zoomout'           : {
                    'title'         : 'Zoom Out',
                    'description'   : 'Zoom Out',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'start'             : {
                    'title'         : 'Mulai',
                    'description'   : 'Mulai',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'finish'            : {
                    'title'         : 'Selesai',
                    'description'   : 'Selesai',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'choose'            : {
                    'title'         : 'Pilih',
                    'description'   : 'Pilih',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-check',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'unchoose'            : {
                    'title'         : '',
                    'description'   : '',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-check-empty',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'up'                : {
                    'title'         : 'Naik',
                    'description'   : 'Naik',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-arrow-up',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'down'              : {
                    'title'         : 'Turun',
                    'description'   : 'Turun',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-arrow-down',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                'generate'          : {
                    'title'         : 'Generate',
                    'description'   : 'Generate',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-cogs',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'billing'           : {
                    'title'         : 'Tagihan',
                    'description'   : 'Tagihan',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-money',
                    'class'         : 'btn btn-success',
                    'disabled'      : false
                },
                'invoice'           : {
                    'title'         : 'Tagihan',
                    'description'   : 'Tagihan',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-money',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'bast'           : {
                    'title'         : 'BAST',
                    'description'   : 'BAST',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-file-text',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'barcode'           : {
                    'title'         : 'Barcode',
                    'description'   : 'Barcode',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-barcode',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'qrcode'            : {
                    'title'         : 'QR code',
                    'description'   : 'QR code',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-qrcode',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'inventarisasi'     : {
                    'title'         : 'Inventarisasi',
                    'description'   : 'Inventarisasi',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-map-marker',
                    'class'         : 'btn btn-primary',
                    'disabled'      : false
                },
                'export'            : {
                    'title'         : 'Export',
                    'description'   : 'Export',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-upload',
                    'class'         : 'btn btn-info',
                    'disabled'      : false
                },
                'import'     : {
                    'title'         : 'Import',
                    'description'   : 'Import',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-download',
                    'class'         : 'btn btn-info',
                    'disabled'      : false
                },
                'download'     : {
                    'title'         : 'Download',
                    'description'   : 'Download',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : 'icon-download-alt',
                    'class'         : 'btn btn-default',
                    'disabled'      : false
                },
                ''                  : {
                    'title'         : '',
                    'description'   : '',
                    'onclick'       : angular.noop,
                    'href'          : '',
                    'icon'          : '',
                    'style'         : '',
                    'disabled'      : false
                }
            };
            return alt.extend(buttons[type], data);
        };
    }]);
});