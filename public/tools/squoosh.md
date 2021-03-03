
# Converting images to WebP

Below is the script that can be run to change the images to WebP versions.

## Script for 800px wide tool images in webp
```
npx @squoosh/cli --resize '{"enabled":true,"width":800,"method":"lanczos3","fitMethod":"stretch","premultiply":true,"linearRGB":true}' --webp '{"quality":90,"target_size":0,"target_PSNR":0,"method":5,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}' *.png
```

## Script for 200px wide coin images in webp
```
npx @squoosh/cli --resize '{"enabled":true,"width":200,"method":"lanczos3","fitMethod":"stretch","premultiply":true,"linearRGB":true}' --webp '{"quality":90,"target_size":0,"target_PSNR":0,"method":5,"sns_strength":50,"filter_strength":60,"filter_sharpness":0,"filter_type":1,"partitions":0,"segments":4,"pass":1,"show_compressed":0,"preprocessing":0,"autofilter":0,"partition_limit":0,"alpha_compression":1,"alpha_filtering":1,"alpha_quality":100,"lossless":0,"exact":0,"image_hint":0,"emulate_jpeg_size":0,"thread_level":0,"low_memory":0,"near_lossless":100,"use_delta_palette":0,"use_sharp_yuv":0}' *.png
```